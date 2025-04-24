#!/usr/bin/env python3
"""Module qui contient une fonction pour mesurer le temps d'exécution des coroutines

Imports:
    time: Module pour mesurer le temps d'exécution
    asyncio: Module pour l'exécution de code asynchrone
    wait_n: Fonction asynchrone à mesurer
"""
import time
import asyncio
n_wait = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """Fonction qui mesure le temps total d'exécution de wait_n

    Args:
        n (int): Nombre de fois pour exécuter la fonction wait_random dans wait_n
        max_delay (int): Délai maximum pour la fonction wait_random

    Returns:
        float: Le temps moyen d'exécution par opération (temps total / n)
    """
    # Enregistrement du temps de début avec haute précision
    debut = time.perf_counter()
    
    # Exécution de la fonction asynchrone wait_n
    await n_wait(n, max_delay)
    
    # Enregistrement du temps de fin
    fin = time.perf_counter()
    
    # Calcul du temps total écoulé
    temps_total = fin - debut
    
    # Calcul et retour du temps moyen par opération
    return temps_total / n
