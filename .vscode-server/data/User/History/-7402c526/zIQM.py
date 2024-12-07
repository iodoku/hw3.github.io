import requests
from bs4 import BeautifulSoup
import mysql.connector

def crawl_saramin(loc_mcd):
    jobs_list = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    url = f"https://www.saramin.co.kr/zf_user/jobs/list/domestic?loc_mcd={loc_mcd}&recruitPage=1&page=1&page_count=50"      
    try:
        response = requests.get(url, headers=headers, proxies=proxies, timeout=20)
        print("111111")
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        print("111111")
        jobs = soup.select(".list_body .list_item")

        for job in jobs:
            try:
                if job.select_one(".list_curation_wrap"):
                    continue  # 광고 항목 건너뜀
                
                # 회사명 추출
                company_nm_div = job.select_one("div.col.company_nm")
                company = None

                if company_nm_div:
                    company_a_tag = company_nm_div.select_one("a.str_tit")
                    if company_a_tag:
                        company = company_a_tag.get_text(strip=True)
                    else:
                        company_span_tag = company_nm_div.select_one("span.str_tit")
                        if company_span_tag:
                            company = company_span_tag.get_text(strip=True)

                # 공고 제목 및 링크 추출
                title_tag = job.select_one("a.str_tit span")
                title = title_tag.get_text(strip=True) if title_tag else None

                link_tag = job.select_one("a.str_tit")
                link = link_tag.get("href") if link_tag else None
                full_link = f"https://www.saramin.co.kr{link}" if link else None

                # 상세 페이지에서 시작일과 마감일 추출
                starttime, endtime = None, None
                if full_link:
                    timeresponse = requests.get(full_link, headers=headers, timeout=10)
                    timesoup = BeautifulSoup(timeresponse.text, 'html.parser')
                    info_period = timesoup.select_one("dl.info_period")
                    if info_period:
                        for dt, dd in zip(info_period.find_all("dt"), info_period.find_all("dd")):
                            if "시작일" in dt.text:
                                starttime_str = dd.text.strip()
                                starttime = datetime.strptime(starttime_str, "%Y.%m.%d %H:%M") if starttime_str else None
                            elif "마감일" in dt.text:
                                endtime_str = dd.text.strip()
                                endtime = datetime.strptime(endtime_str, "%Y.%m.%d %H:%M") if endtime_str else None

                # 근무지, 경력, 학력 등 추가 정보 추출
                work_place_tag = job.select_one("p.work_place")
                work_place = work_place_tag.get_text(strip=True) if work_place_tag else None

                career_tag = job.select_one("p.career")
                career = career_tag.get_text(strip=True) if career_tag else None

                education_tag = job.select_one("p.education")
                education = education_tag.get_text(strip=True) if education_tag else None

                # 등록 정보 추출
                fixline_tag = job.select_one("p.support_detail span.deadlines")
                fixlines = fixline_tag.get_text(strip=True) if fixline_tag else None

                # 리스트에 추가
                jobs_list.append({
                    "company": company,
                    "title": title,
                    "location": full_link,
                    "work_place": work_place,
                    "career": career,
                    "education": education,
                    "startdate": starttime,
                    "enddate": endtime,
                    "fixlines": fixlines,
                })

            except AttributeError as e:
                print(f"항목 파싱 중 에러 발생: {e}")
                continue

    except requests.RequestException as e:
        print(f"페이지 요청 중 에러 발생: {e}")

    return jobs_list

def save_to_mysql(jobs_list, localhost, username, userpassword, userdatabase, userport):
    # MySQL 연결
    connection = mysql.connector.connect(
        host=localhost,
        user=username,
        password=userpassword,
        database=userdatabase,
        port=userport,
    )
    
    cursor = connection.cursor()

    # 기존 데이터 삭제
    delete_query = "TRUNCATE TABLE jobs;"
    cursor.execute(delete_query)

    # 데이터 삽입
    insert_query = """
    INSERT INTO jobs (company, title, location, work_place, career, education, startdate, enddate, fixlines)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    for job in jobs_list:
        cursor.execute(insert_query, (
            job["company"], job["title"], job["location"], 
            job["work_place"], job["career"], job["education"], 
            job["startdate"], job["enddate"], job["fixlines"]
        ))

    # 변경사항 커밋
    connection.commit()

    print(f"{cursor.rowcount}개의 데이터가 MySQL에 저장되었습니다.")

    # 연결 종료
    cursor.close()
    connection.close()

