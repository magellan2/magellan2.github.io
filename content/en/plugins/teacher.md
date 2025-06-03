
# Teacher Plugin

| | |
| ---: | --- |
| Name: | Teacher Plugin |
| Version: | 0.17.0 |
| Description: | Automatic assignment of teachers to students |
| Author: | stm |
| Website: | - |
| Download: | [here](/en/download/#teacher) |


The Teacher Plugin allows automatic assignment of teachers to students.
You have to assign certain special orders to the unit and Teacher will
then try to assign teachers to students in the best possible way and 
set the units' orders accordingly.

You have to tell teacher which talents a unit should learn, how much
the different talents are worth and which units should be teachers. 
Teacher then tries to maximize the sum of all values of learning units. 
The values of units with a teacher are doubled (roughly), because they will 
learn twice as fast. You can specify (potential) teachers and students by 
adding one or more of the following meta orders to the unit's orders. 
        
    // $$L priority Talent1 target1 max1 Talent2 target2 max2

denotes a student learning two skills of different values.
        
* priority - denotes the importance of this unit. Units with high priority will be favored when 
           finding teachers. You can start with equal priorities for all units.
* target -  denotes the desired skill value
* max -     denotes the maximum skill value


For example, a unit with "// $$L 100 melee 10 99 endurance 5 99 riding 5 2" will try to keep 
the ration between "melee" and "endurance" at 2:1 and will learn "riding" up to skill level 2.   
         
    // $$T Talent1 maxDiff1 Talent2 maxDiff2

denotes a teacher that may teach two skills. Students having a skill level differing more
than maxDiff from the teachers skill level are penalized. maxDiff==0 has the special
meaning that there is no such penalty. maxDiff==1 means that the teacher will
not teach this talent.
        
    // $$T ALLES maxDiff         
        

denotes a teacher teaching all the skills he knows.
        
    // $$T ALLES 0 Hiebwaffen 2        
        

would also be feasible
        
    // $namespace1$T ...

    // $namespace1$L ...

defines an order belonging to a namespace; it can be used to teaching
only to units with certain namespace

It is feasible (in fact, desirable) for a unit to be teacher and student at the
same time. In other words, if a unit has a teaching order it must also have a learning order.
        
