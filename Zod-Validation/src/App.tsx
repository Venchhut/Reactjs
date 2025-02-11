import { z } from "zod";

const userSchema = z.object({
  userName: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  age: z.number().min(2),
  member: z.array(z.string()).max(5),
  work: z.object({
    place: z.string(),
    position: z.string(),
    isWorking: z.boolean(),
  }),
  address: z.string().optional(), // this give us the choice of having the address or not
  situation: z.string().nullable(), // situation can be null
});

export type User = z.infer<typeof userSchema>;

const user: User = {
  userName: "John Doe",
  email: "john.doe@me.com",
  website: "https://john.doe.com",
  age: 18,
  member: ["songha", "deja", "jon"],
  work: {
    place: "Facebook",
    position: "Software developer",
    isWorking: true,
  },
  situation: null,
};

console.log(userSchema.safeParse(user)); // not throw the error but show the error in the console

// console.log(userSchema.parse(user));
// this will throw the error if the schema is not valid

const App = () => {
  return (
    <div>
      <h1>Zod Validation with React</h1>
    </div>
  );
};

export default App;
