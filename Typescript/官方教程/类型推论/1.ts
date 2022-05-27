// 首先声明所有的学科枚举
enum Subject {
   "Chinese",
   "Math",
   "English",
   "Physics",
   "Chemical",
   "Biology",
   "Politics",
   "History",
   "Geography"
 }
 ​
 // 定义通用学科
 type BasicSubject = Subject.Chinese | Subject.Math | Subject.English;
 // 定义理科
 type ScienceSubject = Subject.Physics | Subject.Chemical | Subject.Biology | BasicSubject;
 // 定义文科
 type LiberalSubject = Subject.Politics | Subject.History | Subject.Geography | BasicSubject;
 ​
 // 随便写个理科分数模型变量
 const record: Record<ScienceSubject, number> = {
   [Subject.Chinese]: 100, 
 }
 
 console.log(record)