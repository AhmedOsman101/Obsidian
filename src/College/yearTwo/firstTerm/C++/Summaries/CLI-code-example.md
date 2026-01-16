```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <filesystem>
#include <cstdlib>

using namespace std;

void pattern() {
  int rows, width, minuses, pluses = 1;
  cout << "Enter how many rows: \n"; cin >> rows;

  width = (rows * 2) - 1;

  for (int i = 0; i < rows; i++) {
    minuses = (width - pluses) / 2;

    for (int j = 0; j < minuses; j++) cout << "-";
    for (int k = 0; k < pluses; k++) cout << "+";
    for (int l = 0; l < minuses; l++) cout << "-";

    pluses += 2;
    cout << endl;
  }
}

const string OUTPUT_DIR = "/home/othman/work/college/c++/exam-preparation/invoices";

struct Product {
  int id;
  string name;
  double price;
};

const int NUM_PRODUCTS = 3;

// Create an array of Product objects
Product PRODUCTS[NUM_PRODUCTS] = {
  {0, "keyboard", 50.0},
  {1, "mouse", 30.0},
  {2, "scanner", 100.0}
};

int generateId() {
  int id = 0;
  string countFilePath = OUTPUT_DIR + "/count.txt";
  ifstream inFile(countFilePath);

  if (inFile) {
    inFile >> id;
    inFile.close();
  }

  if (id <= 0) id = 1;
  else id++;

  ofstream outFile(countFilePath, ios::trunc);

  if (!outFile) {
    cerr << "Failed to open file for writing: " << countFilePath << endl;
    exit(1);
  }

  outFile << id << endl;
  outFile.close();

  return id;
}

class Invoice {
 public:
  int id;
  vector<Product> items = {};
  double totalPrice = 0;
  string fileName;

  Invoice() {
    id = generateId();
    fileName = OUTPUT_DIR + "/" + to_string(id) + "-invoice.txt";
  }

  void addItem(const Product& p) {
    items.push_back(p);
    totalPrice += p.price;
  }
  void saveToFile() const {
    ofstream outFile(fileName);

    if (!outFile) {
      cerr << "Failed to open file " << fileName << endl;
      exit(1);
    }

    outFile << id << "\n";
    outFile << totalPrice << "\n";

    for (size_t i = 0; i < items.size(); i++) {
      outFile << items[i].id;
      if (i != items.size() - 1) outFile << ",";
    }

    outFile.close();
    cout << "Invoice saved to " << fileName << "\n";
  }
};

void invoice() {
  const string message = "If you want to record another invoice, press the letter 'p'\nIf you want to exit the program, type 'exit'\n";
  string option, items_string;

  while (option != "exit") {
    vector<int> items = {};
    cout << message;
    getline(cin, option);

    if (option == "exit") break;
    if (option != "p") {
      cout << "Invalid option: " << option << "\n";
      continue;
    }

    for (int i = 0; i < NUM_PRODUCTS; i++) {
      cout << i + 1 << ": " << PRODUCTS[i].name << " (" << PRODUCTS[i].price << ")" << "\n";
    }

    cout << "Choose product numbers to add (separate items with commas ','): ";
    getline(std::cin, items_string);

    for (char item : items_string) {
      if (item < '1' || item > '3') continue;

      items.push_back(item - '1'); // subtract the ascii value
    }

    cout << "You selected: ";
    for (int idx : items) cout << PRODUCTS[idx].name << " ";
    cout << endl;

    Invoice currentInvoice;
    for (auto item : items) currentInvoice.addItem(PRODUCTS[item]);
    currentInvoice.saveToFile();
  }

  cout << "Goodbye!" << endl;
}

int main() {
  filesystem::create_directories(OUTPUT_DIR);
  invoice();

  return 0;
}
```
