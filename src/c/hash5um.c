#include <stdio.h>
#include <stdlib.h>

unsigned long long hash5um(const char *inputFile) {
  FILE *file = fopen(inputFile, "rb");
  if (file == NULL) {
    perror("Error opening file");
    return 0;
  }

  fseek(file, 0, SEEK_END);
  long fileSize = ftell(file);
  fseek(file, 0, SEEK_SET);

  int paddedLength = (fileSize + 3) / 4 * 4;
  unsigned char *paddedData = (unsigned char *)calloc(paddedLength, sizeof(unsigned char));

  fread(paddedData, 1, paddedLength, file);  // Leer hasta la longitud rellenada
  fclose(file);

  unsigned int *uint32Array = (unsigned int *)paddedData;
  int numElements = paddedLength / 4;
  unsigned long long sum = 11111111111111111111ULL;

  for (int i = 0; i < numElements; i++) {
    sum += uint32Array[i];
  }

  free(paddedData);
  return sum;
}

/*
int main(int argc, char *argv[]) {
  if (argc != 2) {
    fprintf(stderr, "Usage: %s <inputFile>\n", argv[0]);
    return 1;
  }

  unsigned long long hash = hash5um(argv[1]);
  printf("%llx\n", hash);

  return 0;
}
*/
