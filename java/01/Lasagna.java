// https://exercism.org/tracks/java/exercises/lasagna

public class Lasagna {
  public int expectedMinutesInOven() {
      return 40;
  }

  public int remainingMinutesInOven(int minutes) {
      return this.expectedMinutesInOven() - minutes;
  }

  public int preparationTimeInMinutes(int layers) {
      return layers * 2;
  }

  public int totalTimeInMinutes(int layers, int remainingMinutesInOven) {
      int preparationTimeInMinutes = this.preparationTimeInMinutes(layers);

      return remainingMinutesInOven + preparationTimeInMinutes;
  }
}
