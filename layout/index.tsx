import Head from "next/head";
import { Menu } from "antd";
import { useRouter } from "next/router";
const Layout = ({ children }: { children: any }) => {
  const items = [
    {
      label: "ranking",
      key: "ranking",
      url: "/",
    },
    {
      label: "web2.0",
      key: "web2",
      children: [
        { label: "Chart", key: "chart2" },
        { label: "Project", key: "project2" },
      ],
    },
    {
      label: "web3.0",
      key: "web3",
      children: [
        { label: "Chart", key: "chart3",url: "/web3/chart" },
        { label: "Project", key: "project3", url: "/web3/project" },
      ],
    },
  ];
  const router = useRouter();
  const jumpURL = ({ item }: { item: any }) => {
    const { props } = item;
    if(props.url){
      router.push(props.url);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex items-center text-2xl"
        style={{ height: "80px", width: "100vw", paddingLeft: "80px" }}
      >
        BCTrade
      </div>
      <main
        className="flex w-full  h-full pt-4"
        style={{ paddingTop: "20px", paddingRight: "16px" }}
      >
        <div className=" w-72 text-xl mt-10 h-full" style={{ width: "280px" }}>
          <Menu items={items} mode="inline" onSelect={jumpURL} />
        </div>
        <div className="w-full flex-1 h-full ">{children}</div>
      </main>
    </>
  );
};

export default Layout;
