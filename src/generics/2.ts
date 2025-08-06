type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare(top: TopType, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log("---------------------2 task generics------------------");
console.log(
  compare({ name: "name1", color: "color1" }, { position: 20, weight: 200 })
);
// console.log(
//   compare({ name: "name1", position: 10 }, { position: 20, weight: 200 }) // error
// );
