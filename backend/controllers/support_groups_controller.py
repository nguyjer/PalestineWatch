from flask import jsonify, abort, request
from backend.models import SupportGroupsModel
from backend import db

def get_all_groups():
    try:
        # Start with the base query
        query = SupportGroupsModel.query
        search_term = request.args.get('query')
        if search_term:
            search_term = f"%{search_term}%"
            query = query.filter(
                (SupportGroupsModel.name.ilike(search_term)) |
                (SupportGroupsModel.city.ilike(search_term)) |
                (SupportGroupsModel.state.ilike(search_term)) |
                (SupportGroupsModel.zipcode.ilike(search_term))
            )

        # Execute the filtered query
        groups = query.all()

        # Serialize the result
        groups_data = [
            {
                "id": group.id,
                "name": group.name,
                "email": group.email,
                "city": group.city,
                "state": group.state,
                "zipcode": group.zipcode,
                "link": group.link,
                "url_image": group.url_image,
                "newsId": group.newsId,
                "countryId": group.countryId,
            }
            for group in groups
        ]
        return jsonify(groups_data), 200
    except Exception as e:
        print(f"Error in get_all_groups: {e}")
        return jsonify({"error": str(e)}), 500

def get_group_by_id(groups_id):
    try:
        group = db.session.get(SupportGroupsModel, groups_id)
        if group is None:
            abort(404, description="Support Group not found")

        group_data = {
            "id": group.id,
            "name": group.name,
            "email": group.email,
            "city": group.city,
            "state": group.state,
            "zipcode": group.zipcode,
            "link": group.link,
            "url_image": group.url_image,
            "newsId": group.newsId,
            "countryId": group.countryId,
        }
        return jsonify(group_data), 200
    except Exception as e:
        print(f"Error in get_group_by_id: {e}")
        return jsonify({"error": str(e)}), 500
