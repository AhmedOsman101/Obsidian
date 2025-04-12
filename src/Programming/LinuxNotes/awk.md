# Notes on awk

## Basic usage

By default columns are separated by the whitespace character

```shell
ps | awk '{print $1}'  # prints the first column of text
ps | awk '{print $NF}' # prints the last column of text
ps | awk '{print $0}'  # prints everything
ps | awk '{print}'     # prints everything
```

## Working with field separators

```shell
# separates the columns by the colon `:` character, the prints the first column
cat /etc/passwd | awk -F ":" '{print $1}'

# prints the first and last columns with a tab character between them
cat /etc/passwd | awk -F ":" '{print $1 "\t" $NF}'

# prints the first and last columns with a custom separator between them
# NOTE: We separated entries using a comma, if we removed it the custom separator won't work
# FS -> field separator, OFS -> Output field separator
awk 'BEGIN{FS=":"; OFS="\t"} {print $1, $NF}' /etc/passwd
```

## Filtering lines with regex

```shell
# Sets the field separator as `/` finds each line starting with a `/` and prints the last column
awk -F "/" '/^\// {print $NF}' /etc/shells
```
