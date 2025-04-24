#!/usr/bin/env python3
"""Module contient une fonction qui attend pendant n secondes et renvoie n

Imports:
    random: Contient la méthode .uniform pour générer des nombres aléatoires
    asyncio: Contient la méthode sleep pour les opérations asynchrones
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Fonction qui attend pendant un délai aléatoire

    Args:
        max_delay (int): Le délai maximum à attendre (en secondes)

    Returns:
        float: Le délai aléatoire généré et attendu
    """
    # Génération d'un nombre aléatoire entre 0 et max_delay
    delay = random.uniform(0, max_delay)
    # Attente asynchrone pendant le délai généré
    await asyncio.sleep(delay)
    # Retourne le délai qui a été attendu
    return delay
