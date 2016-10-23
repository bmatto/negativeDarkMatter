import nose.util
import gol

def test_something():
    assert gol.something() == 'whatever'

def test_grid_exists():
    assert len(gol.generate_grid(64,64)) == 64
    assert len(gol.generate_grid(64,64)[0]) == 64

def test_
