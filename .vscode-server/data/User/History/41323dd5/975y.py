import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

def crawl_saramin(keyword, pages=10):
    """
    사람인 채용공고를 크롤링하는 함수

    Args:
        keyword (str): 검색할 키워드
        pages (int): 크롤링할 페이지 수

    Returns:
        list: 채용공고 정보가 담긴 리스트
    """
    jobs = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    for page in range(1, pages + 1):
        url = f"https://www.saramin.co.kr/zf_user/search/recruit?searchType=search&searchword={keyword}&recruitPage={page}"

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')

            job_listings = soup.select('.item_recruit')

            for job in job_listings:
                try:
                    company = job.select_one('.corp_name a').text.strip()
                    title = job.select_one('.job_tit a').text.strip()
                    link = 'https://www.saramin.co.kr' + job.select_one('.job_tit a')['href']
                    conditions = job.select('.job_condition span')
                    location = conditions[0].text.strip() if len(conditions) > 0 else ''
                    experience = conditions[1].text.strip() if len(conditions) > 1 else ''
                    education = conditions[2].text.strip() if len(conditions) > 2 else ''
                    employment_type = conditions[3].text.strip() if len(conditions) > 3 else ''
                    deadline = job.select_one('.job_date .date').text.strip()
                    job_sector = job.select_one('.job_sector')
                    sector = job_sector.text.strip() if job_sector else ''
                    salary_badge = job.select_one('.area_badge .badge')
                    salary = salary_badge.text.strip() if salary_badge else ''

                    jobs.append({
                        '회사명': company,
                        '제목': title,
                        '링크': link,
                        '지역': location,
                        '경력': experience,
                        '학력': education,
                        '고용형태': employment_type,
                        '마감일': deadline,
                        '직무분야': sector,
                        '연봉정보': salary
                    })

                except AttributeError as e:
                    print(f"항목 파싱 중 에러 발생: {e}")
                    continue
            print(f"{page}페이지 크롤링 완료")
        except requests.RequestException as e:
            print(f"페이지 요청 중 에러 발생: {e}")
            continue

    return jobs
