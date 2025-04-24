#!/usr/bin/env python3
"""Module contains function that takes two integers

Imports:
    typing: module for list type annotation
    random_wait: function delays for n seconds and returns n
"""
from typing import List
# Importation de la fonction task_wait_random depuis le module précédent
random_wait = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Function takes integers and calls wait_random function

    Args:
        n (int): num of times to call wait_random
        max_delay (int): Num of seconds to delay wait_random

    Returns:
        List[float]: List of wait_random returns
    """
    # Initialisation d'une liste vide pour stocker les délais
    myList: List[float] = []
    i: int = 0

    # Boucle pour créer n tâches asynchrones et attendre leurs résultats
    while i < n:
        # Attente du résultat de la fonction task_wait_random
        result = await random_wait(max_delay)
        # Ajout du résultat à la liste
        myList.append(result)
        i += 1

    # Tri à bulles pour ordonner les délais sans utiliser la fonction sort() intégrée
    for end in range(len(myList), 1, -1):
        for j in range(1, end):
            # Comparaison et échange si nécessaire
            if myList[j - 1] > myList[j]:
                # Échange des éléments pour maintenir l'ordre croissant
                myList[j - 1], myList[j] = myList[j], myList[j - 1]
    # Retourne la liste triée des délais
    return myList
