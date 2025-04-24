#!/usr/bin/env python3
"""
Module: 4-tasks

Ce module contient la fonction task_wait_n qui exécute plusieurs tâches
asynchrones en parallèle en utilisant task_wait_random.

Cette fonction est similaire à la fonction wait_n mais utilise task_wait_random
au lieu de wait_random directement. task_wait_random est importé du module 3-tasks
et crée une tâche asyncio pour exécuter wait_random.

Imports:
    asyncio: Module pour la programmation asynchrone
    List: Type pour l'annotation des listes typées
    task_wait_random: Fonction qui retourne un objet asyncio.Task
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute n tâches asynchrones en parallèle, chacune appelant task_wait_random.

    Cette fonction crée n tâches asynchrones en utilisant task_wait_random,
    les exécute toutes en parallèle avec asyncio.gather, puis trie les résultats
    en ordre croissant avant de les retourner.

    Args:
        n (int): Nombre de tâches à exécuter
        max_delay (int): Délai maximum en secondes pour chaque tâche

    Returns:
        List[float]: Liste des délais générés par les tâches, triés en ordre croissant
    """
    # Création d'une liste de n tâches asynchrones
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    
    # Exécution de toutes les tâches en parallèle et récupération des résultats
    delays = await asyncio.gather(*tasks)
    
    # Tri manuel des délais par insertion
    sorted_delays: List[float] = []
    for delay in delays:
        # Recherche de la position correcte pour insérer chaque délai
        idx = 0
        while idx < len(sorted_delays) and delay > sorted_delays[idx]:
            idx += 1
        # Insertion du délai à la bonne position
        sorted_delays.insert(idx, delay)
    
    return sorted_delays
