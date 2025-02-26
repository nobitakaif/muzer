import { Appbar } from "./component/Appbar";

console.log(process.env.GOOGLE_CLIENT_ID)
export default function Home() {
  return (
    <div>
      <Appbar/>
    </div>
  );
}
