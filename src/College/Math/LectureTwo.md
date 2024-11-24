Special Types of Matrices 

Symmetric and Skew-Symmetric Matrices 
Definition:  A matrix $A$ is symmetric if, $A^T = A$.
Note: A symmetric matrix must be square.

Example 8: Show that matrix $A$  is symmetric

$$
A = \begin{bmatrix}
1 & 2 & 4 \\
2 & 0 & 17 \\
4 & 17 & 6
\end{bmatrix}
$$
$$
A^T = \begin{bmatrix}
1 & 2 & 4 \\
2 & 0 & 17 \\
4 & 17 & 6
\end{bmatrix}, \quad A = A^T
$$

Definition: A matrix $A$ is skew-symmetric if, $A^T = −A$ 

Note: A skew-symmetric matrix must be square and have all diagonal entries equal to 0. 

 

Example 11 

 

Show that the sum of 2 skew-symmetric matrices is skew-symmetric. 

 

Let the 2 skew-symmetric matrices be A  and B. Then,  

 

(A + B )T = A T + B T 

 

 (A + B )T = ( −A ) + ( −B ) 

 

 (A + B )T = −(A + B ) 

 

Hence, as the sum A + B satisfies the skew-symmetric condition, the 
sum of 2 skew-symmetric matrices is skew-symmetric.  

 

Orthogonal Matrices 

 

Definition: 

 

A square matrix A  (of order n  × n ) is orthogonal if, 

 

A T A = 

In 

 

Example 12 

 

Show that R = cos sin 
 sin cos 

θ θ
θ θ

 
 
− 

 is an orthogonal matrix. 

 

 R T R = cos sin 
sin cos 

θ θ
θ θ

 − 
 
 

 cos sin 
 sin cos 

θ θ
θ θ

 
 
− 

 

 

                        =   

2 2

2 2

cos sin cos sin sin cos 
sin cos cos sin sin cos 

θ θ θ θ θ θ
θ θ θ θ θ θ

 + − 
 
 − + 

  

 

                         =  

1 0 
0 1

  
  
 

  


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 13 St. Machar Academy 

 
 = I2 

 

Hence, as R T R equals the identity matrix, R is orthogonal. 

 

Determinants 

 

The solution to the 1  ×  1 system,  

 

ax  =  b 

 

is,   

 

  x  =  

b
a 

 

assuming a  ≠  0. 

 

The solution to the 2  ×  2 system of equations,  

 

ax by e
cx dy f

+ =
+ =

 

 

is,   

 

x = de bf
ad bc

−
− 

 

y = af ce
ad bc

−
− 

 

assuming ad  −  bc  ≠  0. 

 

The solution to the 3  ×  3 system of equations,  

 

ax by cz j 
dx ey fz k 
gx hy iz l

+ + =
+ + =
+ + =

 

 

is (this takes a lot more effort),  


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 14 St. Machar Academy 

 

x = ( ) ( ) ( ) 
( ) ( ) ( )

j ei fh k bi ch l bf ce 
a ei fh b di fg c dh eg

− − − + −
− − − + − 

 

y = ( ) ( ) ( ) 
( ) ( ) ( )

j fg di k cg ai l cd af 
a ei fh b di fg c dh eg

− − − + −
− − − + − 

 

 

z = ( ) ( ) ( )
( ) ( ) ( )

j dh ge k ah bg l ae bd 
a ei fh b di fg c dh eg

− − − + −
− − − + − 

 

assuming a(ei − fh) − b(di − fg) + c(dh − eg) ≠ 0. 

 

In each of these solutions, we require the denominators to be non-zero. 
The denominators that arise in the solutions have a pattern (not 
necessarily that obvious !) and a special name. We first need some 
definitions. 

 

Definition: 

 

A permutation, denoted by σ , of an ordered set of numbers (1, 2, 3, … , 
n) is a rearrangement of those numbers. 

 

An even permutation is one where the rearrangement involves an even 
number of consecutive switches starting from the original numbers. 

 

An odd permutation is one where the rearrangement involves an odd 
number of consecutive switches starting from the original numbers. 

 

Definition: 

 

The sign of a permutation σ , denoted by sign σ , is defined to be + 1 
for an even permutation and − 1 for an odd permutation. 

 

Example 13 

 

For the case n = 3, the permutation (1, 2, 3) σ→ (2, 1, 3) is odd, as 
the result of σ involves only 1 switch (1↔2) between consecutive 
numbers of (1, 2, 3). The sign of this permutation is − 1 . 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 15 St. Machar Academy 

Example 14 

 

Again, for the case n = 3, the permutation (1, 2, 3) σ→ (3, 1, 2) is 
even, as the result of σ involves 4 switches between consecutive numbers 
of (1, 2, 3). The switches are (1, 2, 3) → (2, 1, 3) → (2, 3, 1) → (3, 2, 1) 
→ (3, 1, 2). For this permutation, sign σ = + 1. 

 

A permutation can be thought of as a function. For example, in Example , 
1 gets sent to 3 would be written as σ (1) = 3. 

 

Definition: 

 

The determinant of an n  × n  matrix is given by the Leibniz formula, 

 

det (A ) ≡ A 

def
= ( )
1

(sign ) 

n

i σ i

σ i

σ a
=

   
   
   
   

∑ ∏ 

 

Fortunately, this cryptic formula does not need to be remembered; an 
alternative formula that is more practical will be given below. 

 

Definition: 

 

For an n × n matrix A, the minor of entry aij is the determinant 
(denoted Mij ) of the (n − 1) × (n − 1) matrix formed from A by 
deleting the i th row and j th column of A. 

 

Definition: 

 

The cofactor of entry aij is the quantity 

 

Cij 

def
= ( − 1)i +j Mij 

 

It can be shown that the Leibniz formula for determinants can be written 
using cofactors in the form given in the following theorem. 

 

 

 

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 16 St. Machar Academy 

Theorem: 

 

The determinant of an n × n matrix is given by the Laplace expansion 
formula, 

 

det (A )  =  

 1

n

ij ij

j

a C

=

∑ (i = 1, 2, 3, … , n) 

 

The Laplace expansion formula expresses the determinant of a matrix in 
terms of smaller determinants. For satisfaction and reassurance, the 
following theorems should be proven using the Laplace expansion formula. 

 

Theorem: 

 

The determinant of a 1  ×  1 matrix is, 

 

A ≡ (a) = a 

 

Theorem: 

 

The determinant  of a 2  ×  2 matrix is, 

 

A ≡ 

a b 
c d

  
  
 

 = ad − bc 

 

Theorem: 

 

The determinant  of a 3  ×  3 matrix is, 

 

A ≡ 

a b c 
d e f 
g h i

 
 
 
 
 

 = a e f 
h i

  
  
 

 − b d f 
g i

  
  
 

 + c d e 
g h

  
  
 

 

 

Notice that these are precisely the expressions for the denominators for 
the systems at the start of this section. 

 

 

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 17 St. Machar Academy 

Example 15 

 

Calculate the determinant of the matrix B = 1 4
2 6

 −  
  
 

. 

 

det (B ) = 1 4
2 6

 −  
  
 

     

 

 = 1.6 − ( −4).2 
    
   =  14 

 

Example 16 

 

Calculate the determinant of the matrix F  =  

1 2 7
6 0 1
3 10 4

 − 
 
 − 
− − 

 

. 

 

                   det (F )  =  

1 2 7
6 0 1
3 10 4

 − 
 
 − 
− − 

 

  

 

                                       =   1 

0 1 
10 4

 − 
 
− 

 − (−2) 

6 1 
3 4

 −  
 
− 

 + 7 

6 0 
3 10

 
 
− − 

 

 

 = 1 (0 − 10) + 2 (24 − 3) + 7 ( −60 − 0) 

 

 = − 388 

 

Example 17 

 

Solve the equation 2 4
3x 5

 − 
 
 

  =  21 for x. 

 

2 4 
3x 5

 − 
 
 

  =  21 

  
 10 + 12x = 21 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 18 St. Machar Academy 

 

          12x  =  11 

 

x = 1121 

 

Properties of Determinants 

 

The following properties hold for n × n matrices and k ∈ ℝ . 
 
• det (AB ) = det (A ) det (B ) 

 

• det (kA ) = k n det (A ) 

 

• det (A T ) = det (A ) 

 

Inverse of a Matrix 

 

Inverse Matrices  

 

Of all the operations that have been described for matrices, that of 
division has not been mentioned. The closest concept of ‘ division of 
matrices ’ involves the following.  

 

Definition: 

 

An n × n matrix A has an inverse if there is a matrix (denoted A −1 ) 
such that, 

 

AA −1 = A −1 A = In 

 

If a matrix A  has an inverse, then A is said to be invertible (aka non-
singular).  

 

If a matrix does not have an inverse, then it is non-invertible (aka 
singular). 

 

Theorem: 

 

A matrix has only 1 inverse. 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 19 St. Machar Academy 

 

Definition: 

 

The cofactor matrix of a square matrix A  is the matrix C  whose (i, j )th 
entry is Cij . 
Definition: 

 

The adjugate (aka classical adjoint) of a square matrix A is the 
transpose of the cofactor matrix C, 

 

adj (A )  

def
= C T 

 

Theorem: 

 

The inverse of a matrix A  is given by, 

 

A −1 = 

adj ( ) 
det ( )

A
A

 

 

Theorem: 

 

A matrix is invertible iff det (A ) ≠ 0. 

 

This theorem implies that a matrix is non-invertible iff det (A )  =  0. 

 

Example 18 

 

Show that A  =  

1 0 4
2 0 17 
4 17 6

 
 
− 
 
 

 is invertible. 

 

                   det (A )  =  

1 0 4
2 0 17
4 17 6

 
 
− 
 
 

 

 

                            =   1 

0 17 
17 6

 
 
 

 − 0 2 17
4 6

−  
 
 

 + 4 2 0 
4 17

−  
 
 

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 20 St. Machar Academy 

 = 1 (0 − 289) + 4 (−34 − 0) 

 

 = − 425 

 

Hence, as det (A ) ≠ 0, A is invertible. 

 

Example 19 
Determine the values of k for which the matrix 2
2 5

k

k 

 − 
 
− + 

 is singular. 

 

For singularity, we require the determinant of the given matrix to be 0.  

 

2
2 5

k

k

 − 
 
− + 

   =   0 

 

 k (k + 5) − ( −2). (−2) = 0 

 

 k2 + 5k + 4 = 0 

 

 (k + 1) (k + 4) = 0 

 

Hence, the given matrix is singular when k = −1 and k = −4. 

 

Example 20 

 

If the matrix A satisfies the equation A 2 = 18A − 27I2 , show 
(without explicitly calculating A −1 ) that A −1 = DA + EI2 , stating the 
values of D and E. 

 

A 2 = 18A − 27

I2 

 

Multiplying (doesn’t matter whether post or pre, as the only matrices 
involved are A and I2 ) this equation throughout by A −1 gives, 

 

 A −1 A 2 = A −1 (18A − 27I2 ) 

 

Performing the multiplications and simplifying gives, 

 

 A = 18I2 − 27A −1 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 21 St. Machar Academy 

 

Rearranging and solving for A −1 gives, 

 

 A −1 = −

1
27 A + 

2
3 I2 

 

Hence, D = − 1

27 and E = 

2
3 . 

 

Inverse and Systems of Equations  

 

An n  ×  n  system of equations with coefficient matrix A  and solution 
represented by the column matrix x  can be written as, 

 

A x  =  b 

 

where b is the RHS of the system of equations. Assuming the inverse 
A −1 exists, multiplying the above equation by A −1 gives, 

 

A −1 A x = A −1 b 

 

 x = A −1 b 

 

In other words, the following theorem holds. 

 

Theorem: 

 

The n  ×  n  system of equations,  

 

A x  =  b 

 

has a solution if A −1 exists; the solution is then obtained by calculating, 

 

x = A −1 b 

 

This result is stated differently in terms of determinants in the following 
theorem. 

 

 

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 22 St. Machar Academy 

 

Corollary: 

 

A system of n  equations in n  unknowns has a solution if the determinant 
of the coefficient matrix is non-zero. 

 

Example 21 

 

Determine the value of k  for which the following system of equations has 
a solution. 

 

1
2 3 0
4 3

x y z
x ky z
x y z

+ + =
− + =
+ − =

 

 

The coefficient matrix is,  

 

1 1 1 
2 3 
1 4 1

k

 
 
 
 − 

 

 

 

The determinant of the coefficient matrix is,  

 

1 1 1 
2 3 
1 4 1

k

 
 
 
 − 

 

 = 1 3 
4 1

k  
  
 − 

 − 1 2 3 
1 1

  
  
 − 

 + 1 2
1 4

 k  
  
 

 

 

 = ( −k − 12) − ( −2 − 3) + (8 − k) 

 

 = −2k − 15 

 

According to the previous theorem, the system of equations has a 
solution when −2k − 15 ≠ 0, i.e. when k ≠ − 15

2 . 

 

In practice, the formula for the inverse involving the adjugate is difficult 
to use from scratch. Fortunately, for the cases we are interested in, 
there are other approaches.  

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 23 St. Machar Academy 

 

Inverse of a 2 x 2 Matrix 

 

Theorem: 

 

The inverse of the 2 × 2 matrix a b 
c d

  
  
 

 is,  

 

A −1 = 

1
ad − bc 

d b 
c a

 − 
 
− 

 

 

This is just the adjugate formula for a 2 × 2 matrix, but it is easier to 
remember in this form.  

 

Example 22 

 

Find the inverse of the matrix 7 3
4 2

 −  
 
 

. 

 

Using the formula in the above theorem gives,  

 

 1

7 3 
4 2

  −

−
 
 

  =   

1
7.2 − ( −3).4

2 3 
4 7

 
 
− 

   

 

                                  

 1

7 3 
4 2

  −

−
 
 

 = 1
26

2 3 
4 7

 
 
− 

 

 

It is ok to leave the answer in this form, instead of actually performing 
the scalar multiplication; there is no virtue in complicating an already ugly 
answer (technically, the answer in the form above is fully simplified, as 
the 1

26 has been factorised out). 

 

 

Example 23 

 

Solve the following equation for x  and y. 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 24 St. Machar Academy 

 2 1
2 3

  
  
− 

x
y

 

 

 

 = 8
16

 

 

 

   

 

Multiplying this equation by 

 1

2 1 
2 3

  −
  
− 

, which equals 1
8

3 1 
2 2

 −  
  
 

 (check !), 

gives, 

 

 x
y

 

 

 

 = 1
8

3 1 
2 2

 −  
  
 

8
16

 

 

 

   

 

 x
y

 

 

 

 = 3 1
2 2

 −  
  
 

1
2

 

 

 

   

 

Performing the matrix multiplication gives x  =  1 and y  =  6. Check that 
these values work in the original equation. 

 

Inverse of a 3 x 3 Matrix 

 

Recall that the n  ×  n  system A x  =  b  can be solved by calculating x  =  

A −1 b. Picking b to be 

1

1
0

 

0

b

 

 
 
=  
 

 

⋮

, 2

0
1

 

0

b

 

 
 
=  
 

 

⋮

, …, 

0
0

bn 

n

 

 
 
=  
 

 

⋮

 shows that the 

solution vector x picks out the columns of A −1 (b1 picks out the first 
column of A −1 etc.). Alternatively, the solution vectors x can be obtained 
by row-reducing the augmented matrices, 

 

(A b1 ) 

 

(A b2 ) 

 

⋮ 

 

(A bn ) 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 25 St. Machar Academy 

so that the LHS of each gives the identity matrix. According to the first 
way of obtaining the RHS, what is left on each RHS will be the columns of 
A −1 . 

 

These n calculations can be performed in one go by forming a giant 
Augmented matrix consisting of A on the LHS, but now b1 , b2 , …, bn 
written beside each other so that the RHS is effectively In . 

 

Theorem: 

 

The inverse of A  can be found by row-reducing the extended Augmented 
matrix, 

 

(A In ) 

 

into,    

 

(In B) 

 

Then B = A −1 . 

 

This theorem is mainly used for a 3  ×  3 matrix A. 

 

Example 24 

 

Find the inverse of N  =  

1 0 4 
2 0 7 
4 1 6

 
 
− 
 
 

. 

 

First set up the big-daddy Augmented matrix,  

 

1 0 4 1 0 0 
2 0 7 0 1 0 
4 1 6 0 0 1

 

 
 
− 
 
 

 

 

Then use EROs to reduce this matrix so that the LHS becomes I3 ; the 
RHS will then be N −1 . 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 26 St. Machar Academy 

 

R2 → R2 + 2R1 
R3 → R3 − 4R1 

1 0 2 1 0 0 
0 0 11 2 1 0 
0 1 2 4 0 1

 

 
 
 
 − − 

 

 

 

2 2

1
R R

↔ 11 

2 1
11 11

1 0 2 1 0 0 
0 0 1 0
0 1 2 4 0 1

 

 
 
 
 − − 

 

 

 

R2 ↔ R3 

2 1
11 11

1 0 2 1 0 0 
0 1 2 4 0 1 
0 0 1 0

 

 
 
 − − 
 
 

 

 

R2 → R2 + 2R3 

40 2
11 11
2 1
11 11

1 0 2 1 0 0 
0 1 0 1
0 0 1 0

 

 
 
 − 
 
 

 

 

R1 → R1 − 2R3 

7 2
11 11
40 2
11 11
2 1
11 11

1 0 0 0
0 1 0 1
0 0 1 0

 

 − 
 
 − 
 
 

 

 

To get the inverse into a slightly slicker form, factorise out the fraction,  

 

N −1 = 

1
11

7 2 0
40 2 11 
2 1 0

 − 
 
− 
 
 

 

 

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 27 St. Machar Academy 

Properties of Inverse Matrices 
 
• (AB) −1 = B −1 A −1 

 

• (A −1 ) T = (A T ) −1 

 

• det (A −1 ) = 

1
det (A )

 

 

• (kA ) −1 = 1
k

A −1 

 

Transformation Matrices 

 

Definition: 

 

A (geometrical) transformation is a way of changing points in space. 

 

In this course, we will focus on transformations in the xy - plane. A 
transformation is described by a function. 

 

Definition: 

 

A linear transformation in the plane is a function that sends a point P (x, 
y) to a point Q (ax + by, cx + dy) (a, b, c, d ∈ ℝ ). 

 

Geometrical transformations can be described using matrices. 

 

Theorem: 

 

A linear transformation in the plane can be described as a matrix 
equation,  

 

x'
y'

  
  
 

   

def

= ax by 
cx dy

 + 
 
 + 

 = a b 
c d

  
  
 

x
y

  
  
 

 

 

The matrix a b 
c d

  
  
 

 is called the transformation matrix. 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 28 St. Machar Academy 

A transformation matrix can be determined by looking at where the 
geometrical transformation sends the points (0, 1) and (1, 0). 
 
Example 25 

 

Find the matrix associated with the transformation (x, y) → (x ’, y ′) 
where x ′ = 2x + 5y and y ′ = x − 3y. 

 

Thinking in terms of matrices and vectors,  

 

x'
y'

  
  
 

 = a b 
c d

  
  
 

x
y

  
  
 

 

 

shows that x ′ = ax + by and y ′ = cx + dy. Comparing this with x ′ = 
2x + 5y and y ′ = x − 3y gives a = 2, b = 5, c = 1, and d = −3. So, 
the required transformation matrix is 2 5 
1 3

  
  
 − 

. 

 

Example 26 

 

Find the image of the point P (3, −1) under the transformation associated 
with the matrix 1 2
3 0

 −  
  
 

. 

 

The image of P is given by P ′ (x ’, y ′) where, 

 

x'
y'

  
  
 

 = 1 2
3 0

 −  
  
 

3

1

  
  
− 

 

 

This gives x ′  =  5 and y ′  =  9, Thus, the image of P is P ′ (5, 9). 

 

Invariant Points  

 

Some points are left unchanged under a transformation. If x is a 
coordinate vector of a point and T  the transformation matrix, then the 
following definition can be made. 

 

 

 
 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 29 St. Machar Academy 

Definition: 

 

An invariant point is a point whose coordinates stay the same after a 
transformation, 

 

Tx  =  x 

 

Example 27 

 

Find the invariant points under the transformation described by the 
matrix 1 2
2 3

  
  
 

.  

 

The matrix equation, 

 

x
y

  
  
 

 = 1 2 
2 3

−  
  
 

x
y

  
  
 

 

 

yields the equations x = −x + 2y and y = 2x + 3y, which simplify to 
x = y and x = −y. Solving these gives x = 0, and y = 0. Hence, (0, 0) is 
the only invariant point under this transformation.  

 

There are some standard transformations that must be known. 

 

Reflection in the x - axis 

 

Theorem: 

 

A reflection in the x-axis is described by the transformation matrix, 

 

1 0 
0 1

  
  
 − 

 

 

Reflection in the y – axis 

 

Theorem: 

 

A reflection in the y-axis is described by the transformation matrix, 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 30 St. Machar Academy 

 

1 0 
0 1

−  
  
 

 

 

Reflection in the Line y = x 

 

Theorem: 

 

A reflection in the line y  =  x  is described by the transformation matrix, 

 

0 1 
1 0

  
  
 

 

 

Anticlockwise rotation about the origin  

 

Theorem: 

 

An anticlockwise rotation of angle θ about the origin is described by the 
transformation matrix, 

 

cos sin 
sin cos 

θ θ
θ θ

 − 
 
 

 

 

Dilatation (Scaling) 

 

Definition: 

 

A dilatation (aka scaling or homothety) is a transformation that scales 
each coordinate of a point by the same amount.  

 

Theorem: 

 

A dilatation is described by the transformation matrix, 

 

0

0

k

k

  
  
 

 (k ∈ ℝ ) 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 31 St. Machar Academy 

If k > 1, the dilatation is an enlargement, whereas if k < 1, the 
dilatation is a reduction. If k  <  0, then the dilatation inverts 

 

Transformation matrices are usually combined to yield a resultant 
transformation. 

 

Example 28 

 

Find the transformation matrix associated with a reflection in the x-axis 
followed by anti-clockwise rotation of 90° about the origin.  

 

The first transformation is the reflection, which we will label as TR , and 
the second is the rotation, labelled as Tθ . Taking a generic point P, the 
first transformation will be TR (P) and the second one will be Tθ (TR (P)). In 
other words, we have to perform matrix multiplication (and remember 
that, in general, the order of multiplication matters). So, the required 
transformation is, 

 

Tθ TR = 

0 1 
1 0

 −  
 
 

 1 0 
0 1

  
  
 − 

 

 

 = 0 1
1 0

  
  
 

 

 

Notice that this is the same as reflecting in the line y  =  x. 

 

Example 29 

 

Find the image of the point P (1, 2) after a reflection in the line y  =  x 
followed by the dilatation 7 0
0 7

  
  
 

. 

 

The image of P will be given by, 

 

7 0 
0 7

  
  
 

 0 1 
1 0

  
  
 

 1
2

  
  
 

 

 


Advanced Higher Notes (Unit 3) Matrices 

M Patel (April 2012) 32 St. Machar Academy 

Performing this multiplication gives the vector 14
7

  
  
 

. So, the image of P is 

P ′ (14, 7).   

 

Transformation of Loci 

 

It is important to know where sets of points, for example, those on a 
curve, get mapped to under a transformation. 

 

Example 30 

 

Find the equation of the image of the curve with equation y = x 2 under 
the transformation with associated matrix 1 2
2 3

  
  
 

. 

 

Let the image of a point P (x, y) be P ′ (x ’, y ′ ). Then,  

 

x'
y'

  
  
 

 = 1 2 
2 3

  
  
 

 x
y

  
  
 

 

 

 x
y

  
  
 

  =  

 1

1 2 
2 3

  −
 
 

 x'
y'

  
  
 

 

 

 x
y

  
  
 

 = 3 2 
2 1

−  
 
 − 

 x'
y'

  
  
 

 

 

 x
y

  
  
 

 = x' y'
x' y'

3 2
2

− + 
 
 − 

 

 

Substituting the above expressions for x and y into y = 3x 2 gives the 
image curve equation in implicit form as 2x' − y' = 3( −3x' + 2y' )2 .
