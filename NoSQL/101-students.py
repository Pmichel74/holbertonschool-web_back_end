# returns all students sorted by average score
def top_students(mongo_collection):
    """Returns all students sorted by average score (descending).
    Each student will have an 'averageScore' key.
    """
    pipeline = [
        {
            "$addFields": {
                "averageScore": {
                    "$avg": "$topics.score"
                }
            }
        },
        {"$sort": {"averageScore": -1}}
    ]
    return list(mongo_collection.aggregate(pipeline))
