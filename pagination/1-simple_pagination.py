#!/usr/bin/env python3
""" Simple pagination """
import csv
import math
from typing import List


def index_range(page, page_size):
    """Retourne un tuple (start_index, end_index) pour la pagination."""
    if page and page_size:
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return start_index, end_index


class Server:
    """Classe serveur pour paginer une base de données de prénoms populaires."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        # Initialise le dataset à None (sera chargé à la demande)
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Retourne le dataset mis en cache.
        Lit le fichier CSV si ce n'est pas déjà fait et ignore l'en-tête.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            # Ignore la première ligne (en-tête)
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Retourne une page de données selon les paramètres de pagination."""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        pages = []
        # Si l'index de départ dépasse la taille du dataset, retourne une liste vide
        if start >= len(self.dataset()):
            return pages
        pages = self.dataset()
        # Retourne la tranche de données correspondant à la page demandée
        return pages[start:end]
