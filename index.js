// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
 get diameter(){
   return this.radius *2 
 }
 get Circumference (){
   return this.radius *2 *Math.PI;
 }
 get Area (){
   return this.radius *this.radius *Math.PI;
 }
 set diameter(d){
   this.radius=d/2}

set circumference(num) {
  this.radius =  (num/3.14)/2
}
}