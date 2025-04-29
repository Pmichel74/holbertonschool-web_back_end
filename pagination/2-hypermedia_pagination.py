#!/usr/bin/env python3
"""Module contains function that returns pagination range
Imports:
    Typing: Type annotation module
    Tuple: Tuple type annotation
    List: List type anotaton
    Dict: Dict type annotation
    csv: csv module
"""
import csv
from typing import List, Tuple, Dict
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Function returns pagination range

    Args:
        page (int): page number
        page_size (int): page size

    Returns:
        Tuple[int, int]: start to end range
    """
    start = (page - 1) * page_size
    end = page * page_size

    return ((start, end))


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Gets specific data
        """
        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0
        assert page_size > 0
        page_range = index_range(page, page_size)
        start = page_range[0]
        end = page_range[1]
        csv_list = self.dataset()

        if start >= len(csv_list):
            return []
        return csv_list[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """Returns a dictionary containing
        hypermedia pagination information.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = (
            total_items // page_size
            + (1 if total_items % page_size else 0)
        )

        next_page = (
            page + 1
            if (page * page_size) < total_items
            else None
        )
        prev_page = (
            page - 1
            if page > 1
            else None
        )

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
