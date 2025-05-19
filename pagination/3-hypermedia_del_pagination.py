#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        # Initialise les attributs privés pour stocker le dataset et l'index
        self.__dataset = None
        self.__indexed_dataset = None

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

    def indexed_dataset(self) -> Dict[int, List]:
        """Retourne le dataset indexé par position de tri, à partir de 0.
        Limite à 1000 entrées pour la pagination.
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            # Crée un dictionnaire indexé par la position
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retourne un dictionnaire avec les détails de la pagination,
        résilient aux suppressions dans le dataset.
        """
        # Vérifie que l'index et la taille de page sont valides
        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0
        indexed_data = self.indexed_dataset()
        data_length = len(indexed_data)

        assert index < data_length
        data = []
        current_index = index
        # Parcourt les données jusqu'à obtenir page_size éléments valides
        while len(data) < page_size and current_index < data_length:
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

        # Calcule le prochain index pour la page suivante
        next_index = current_index if current_index < data_length else None

        # Retourne les informations de pagination
        return {
            "index": index,
            "next_index": next_index,
            "page_size": len(data),
            "data": data
        }
