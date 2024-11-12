from flask import jsonify, abort, request
from backend.models import CountriesModel
from backend import db


def get_all_countries():
    try:
        query = CountriesModel.query
        search_term = request.args.get('query')
        if search_term:
            search_term = f"%{search_term}%"
            query = query.filter(
                (CountriesModel.capital.ilike(search_term)) |
                (CountriesModel.region.ilike(search_term)) |
                (CountriesModel.official_name.ilike(search_term)) |
                (CountriesModel.subregion.ilike(search_term))
                )

        # Execute the filtered query
        countries = query.all()
        countries_data = [
            {
                "id": country.id,
                "coa_iso": country.coa_iso,
                "flag_url": country.flag_url,
                "capital": country.capital,
                "population": country.population,
                "region": country.region,
                "subregion": country.subregion,
                "common_name": country.common_name,
                "official_name": country.official_name,
                "unMembership": country.unMembership,
                "maps": country.maps,
                "newsId": country.newsId,
                "supportGroupId": country.supportGroupId,
            }
            for country in countries
        ]
        return jsonify(countries_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def get_country_by_id(country_id):
    try:
        country = db.session.get(CountriesModel, country_id)
        if country is None:
            abort(404, description="Country not found")

        country_data = {
            "id": country.id,
            "coa_iso": country.coa_iso,
            "flag_url": country.flag_url,
            "capital": country.capital,
            "population": country.population,
            "region": country.region,
            "subregion": country.subregion,
            "common_name": country.common_name,
            "official_name": country.official_name,
            "unMembership": country.unMembership,
            "maps": country.maps,
            "newsId": country.newsId,
            "supportGroupId": country.supportGroupId,
        }
        return jsonify(country_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
