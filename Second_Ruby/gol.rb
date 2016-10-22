
class Game

  VERSE_LENGTH = 10
  VERSE_BREADTH = 10

  attr_reader :verse

  def initialize
    @verse = Array.new(VERSE_LENGTH){Array.new(VERSE_BREADTH)}
    
  end

end

class Lifeform
  attr_accessor :alive

  def alive?
    @alive
  end

  def vivify
    @alive = true
  end

  def the_salmon_mouse
    @alive = false
  end

end
