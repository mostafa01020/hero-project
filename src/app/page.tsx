import { client } from "../../tina/__generated__/client"; 
import HomeClient from "./home-client";

export default async function Home() {
  
  const res = await client.queries.home({ relativePath: "home.json" });

  return (
    <main>
      
      <HomeClient 
        data={res.data} 
        query={res.query} 
        variables={res.variables} 
      />
    </main>
  );
}