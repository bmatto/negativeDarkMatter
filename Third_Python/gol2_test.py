import nose.util
import gol2

def test_universe_is_a_list():
    assert isinstance(gol2.big_bang(), list)

def test_is_universe_2D():
    test_universe = gol2.big_bang()
    assert isinstance(test_universe[0], list)

def test_if_there_is_life():
     test_universe = gol2.big_bang()
     life = 'eggs' in test_universe[5]
     assert life == True

