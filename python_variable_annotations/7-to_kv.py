#!/usr/bin/env python3
"""
    7-to_kv.py
    Module contains function that converts a key and a value to a tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Function that takes a string k and an int OR float v as arguments
    and returns a tuple
    
    Args:
        k (str): string key
        v (Union[int, float]): int or float value
        
    Returns:
        Tuple[str, float]: Tuple containing k and square of v
    """
    return k, float(v ** 2)
