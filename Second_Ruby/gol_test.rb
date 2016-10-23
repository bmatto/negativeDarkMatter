require 'minitest/autorun'
require './gol'

class GameTest < Minitest::Test

  def setup
    @game = Game.new()
    @verse = Array.new(10){Array.new(10)}
    @lifeform = Lifeform.new()
  end

  def test_game_exists
    assert_instance_of(Game, @game)
  end

  def test_verse_exists
    assert_equal(@game.verse, @verse)
  end

  def test_lifeforms_exist
    assert_instance_of(Lifeform, @lifeform)
  end

  def test_if_lifeform_can_live
    assert_respond_to(@lifeform, :alive?)
  end

  def test_lifeform_can_come_to_life
    @lifeform.vivify
    assert(@lifeform.alive?)
  end

  def test_lifeform_is_mortal
    @lifeform.the_salmon_mouse
    assert(!@lifeform.alive?)
  end

end

