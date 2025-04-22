#!/usr/bin/env python3
"""
    4-define_variables.py
    Module contains function that returns a list of variables
"""
from typing import List, Tuple
from math import pi


def define_variables() -> Tuple[int, float, str, List[int],
                                Tuple[bool, bool], float]:
    """
        Function that returns a list of variables
        Returns:
            Tuple: tuple of variables
    """
    a: int = 1
    pi: float = 3.14
    i_understand_annotations: bool = True
    school: str = "Holberton"

    return a, pi, i_understand_annotations, school
