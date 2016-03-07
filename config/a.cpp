#include <iostream>
#include <cstdlib>
#include <string>
#include <ctime>

using namespace std;

int main() {
  int size;
  int swap;
  string divider = " ~ ";

  cout << "Ilosc losowych liczb: ";
  cin >> size;

  int array[size];

  srand((unsigned) time(0));
  for (int i = 0; i++ < size;) {
    array[i] = (rand() % 100) + 1;
    cout << array[i] << divider;
  } cout << endl;

  for (int i = 0; i++ <= size;) {
    for (int j = 0; j++ < size;) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;

        for (int i = 0; i++ < size;) {
          if (i == j) cout << "*";
          cout << array[i] << divider;
        } cout << endl;
      }
    }
  }
}
