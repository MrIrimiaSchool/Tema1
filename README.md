1. Știind că:
funcția rle comprimă/decomprimă o primitivă string sau un obiect String și implementează compresie RLE (Run-length encoding)
compresia RLE presupune transformarea unui (în acest caz) string într-un alt string
caracterele consecutive sunt înlocuite cu un singur caracter urmat de numărul de apariții (exemplu: aaaavvvssss va deveni a4v3s4)
parametrii funcției sunt string-ul și un parametru cu valoare default; dacă acesta este true, se face compresie, altfel decompresie
dacă parametrii nu sunt primitive string sau obiecte String, respectiv boolean se va arunca o excepție (InvalidType)

2. Completați următoarele cerințe:
rle returnează rezultatul corect pentru un string vid (20%)
rle returnează rezultatul corect pentru compresia unui string (20%)
rle aruncă InvalidType parametrul nu este de tip string sau String (20%)
rle returnează rezultatul corect pentru decompresia unui string (20%)
rle utilizează corect parametrul default (20%)
modificarea testelor nu este permisă!
