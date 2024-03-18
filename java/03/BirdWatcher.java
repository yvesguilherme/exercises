// https://exercism.org/tracks/java/exercises/bird-watcher


class BirdWatcher {
   private final int[] birdsPerDay;

  public BirdWatcher(int[] birdsPerDay) {
    this.birdsPerDay = birdsPerDay.clone();
  }

  public int[] getLastWeek() {
    return new int[]{0, 2, 5, 3, 7, 8, 4};
  }

  public int getToday() {
    return this.birdsPerDay[this.birdsPerDay.length - 1];
  }

  public void incrementTodaysCount() {
    int lastItem = this.birdsPerDay.length - 1;
    this.birdsPerDay[lastItem]++;
  }

  public boolean hasDayWithoutBirds() {
    // for (int x : this.birdsPerDay) {
    //     if (x == 0) {
    //         return true;
    //     }
    // }

    // return false;

    // or (performance)

    for (int x = 0; x < this.birdsPerDay.length; x++) {
        if (this.birdsPerDay[x] == 0) {
            return true;
        }
    }
    return false;
  }

  public int getCountForFirstDays(int numberOfDays) {
    int countForFirstDays =  0;

    for (int x = 0; x < this.birdsPerDay.length; x++) {
      if (x == numberOfDays) {
        break;
      }
      countForFirstDays += this.birdsPerDay[x];
    }
    
    return countForFirstDays;
  }

  public int getBusyDays() {
    int busyDays = 0;

    for (int x = 0; x < this.birdsPerDay.length; x++) {
      if (this.birdsPerDay[x] >= 5) {
        busyDays++;
      }
    }
      
    return busyDays;
  }
}
