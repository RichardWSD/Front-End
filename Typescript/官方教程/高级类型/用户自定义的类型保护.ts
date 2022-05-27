function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

// 'swim' 和 'fly' 调用都没有问题了

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}