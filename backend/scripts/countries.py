import requests
from backend import db  
from backend.models import CountriesModel

def fetch_countries():
    unique_countries = ['EGY', 'JOR', 'TUR', 'IRN', 'SYR', 'LBN', 'QAT', 'ARE', 'KWT', 'SAU',
        'PAK', 'IDN', 'MYS', 'BHR', 'OMN', 'DZA', 'MAR', 'TUN', 'LBY', 'IRQ',
        'SDN', 'NGA', 'ZAF', 'MLI', 'NIG', 'SEN', 'BAN', 'AFG', 'MRT', 'CIV',
        'CUB', 'VEN', 'BOL', 'MEX', 'MYS', 'IDN', 'BRN', 'MUS', 'BGD', 'MLI', 
        'YEM', 'DJI', 'SOM', 'COM', 'CAN', 'NOR', 'IRL', 'ESP', 'COL', 'LCA', 'SWE', 'THA', 'GTM']
        
    try:
        for coa_iso in unique_countries:
            country = fetch_country_details(coa_iso)
            db.session.add(country)
        db.session.commit()
        print(f"Inserted {len(unique_countries)} countries into the database.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        db.session.rollback()


def fetch_country_details(coa_iso):
    try:
        res = requests.get(f'https://restcountries.com/v3.1/alpha/{coa_iso}')
        res.raise_for_status()
        country_data = res.json()[0]

        country = CountriesModel(
            coa_iso=coa_iso,
            flag_url=country_data['flags']['png'],
            capital=country_data['capital'][0] if 'capital' in country_data and country_data['capital'] else 'Unknown',
            population=f"{country_data['population']:,}",
            region=country_data.get('region', 'Unknown'),
            subregion=country_data.get('subregion', 'Unknown'),
            common_name=country_data['name']['common'] if 'name' in country_data and 'common' in country_data['name'] else 'Unknown',
            official_name=country_data['name']['official'] if 'name' in country_data and 'official' in country_data['name'] else 'Unknown',
            unMembership='Yes' if country_data.get('unMember', False) else 'No',
            maps=country_data['maps']['googleMaps'] if 'maps' in country_data and 'googleMaps' in country_data['maps'] else 'Unknown',
            supportGroupId=None,
            newsId=None,
        )
    
    except Exception as e:
        print(f"Error fetching details for {coa_iso}: {str(e)}")
        country = CountriesModel (
            coa_iso=coa_iso,
            flag_url='Unknown',
            capital='Unknown',
            population='Unknown',
            region='Unknown',
            subregion='Unknown',
            common_name='Unknown',
            official_name='Unknown',
            unMembership='Unknown',
            maps='Unknown',
            supportGroupId=None,
            newsId=None,
        )
    return country

if __name__ == '__main__':
    print("hello world")
