#!/usr/bin/env python3
"""
    6-sum_mixed_list.py
    Module contains function that returns sum of mixed list
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculates the sum of a list containing integers and floats.

    Args:
        mxd_lst: A list containing integers and floats.

    Returns:
        The sum of the elements in the list as a float.
    """
    return float(sum(mxd_lst))
