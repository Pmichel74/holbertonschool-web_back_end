#!/usr/bin/env python3
"""
Task-based concurrent execution module

Ce module implémente une version task-based de la fonction wait_n.
Il utilise task_wait_random au lieu de wait_random directement.
La principale différence est que task_wait_random retourne une tâche asyncio,
ce qui permet une meilleure gestion des tâches asynchrones.
"""
import asyncio
from typing import List
# Import de la fonction task_wait_random depuis le module 3-tasks
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay
    and returns the list of all the delays in ascending order.
    
    Cette fonction est similaire à wait_n mais utilise task_wait_random
    qui retourne des objets asyncio.Task plutôt que des coroutines directement.
    
    Args:
        n (int): Number of times to spawn task_wait_random
        max_delay (int): Maximum delay for each task_wait_random call
        
    Returns:
        List[float]: List of delays in ascending order by completion time
    """
    # Création d'une liste de n tâches asynchrones
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    
    # Liste pour stocker les résultats dans l'ordre d'achèvement
    results = []
    
    # Récupération des résultats dans l'ordre où les tâches se terminent
    # as_completed permet de récupérer les résultats dès qu'ils sont disponibles
    for task in asyncio.as_completed(tasks):
        # Attente du résultat de la tâche
        delay = await task
        # Ajout du résultat à la liste
        results.append(delay)
        
    # Retourne les délais dans l'ordre où ils ont été obtenus
    return results
