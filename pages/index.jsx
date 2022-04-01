import Header from '../components/header';
import Head from 'next/head';

export default function Stuff() {
  return (
    <>
      <Head>
        <title>Bjarne Voigtländer</title>
      </Head>
      <Header />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 border-4 border-solid border-black bg-white p-4 shadow-backdrop">
          <h1 className="font-abril">hello</h1>
          <p className="font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            asperiores, quia cum aliquid animi provident quibusdam cumque nisi,
            minima excepturi velit eligendi quo tempore ab debitis nulla,
            numquam labore nihil.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis asperiores, quia cum aliquid animi provident
            quibusdam cumque nisi, minima excepturi velit eligendi quo tempore
            ab debitis nulla, numquam labore nihil.
          </p>
          <p className="font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            asperiores, quia cum aliquid animi provident quibusdam cumque nisi,
            minima excepturi velit eligendi quo tempore ab debitis nulla,
            numquam labore nihil.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis asperiores, quia cum aliquid animi provident
            quibusdam cumque nisi, minima excepturi velit eligendi quo tempore
            ab debitis nulla, numquam labore nihil.
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="flex border-4 border-solid border-black bg-white p-4 shadow-backdrop">
            <div className="flex flex-col space-y-2">
              <h1 className="font-abril">hello</h1>
              <p className="font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                asperiores, quia cum aliquid animi provident quibusdam cumque
                nisi, minima excepturi velit eligendi quo tempore ab debitis
                nulla, numquam labore nihil.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis asperiores, quia cum aliquid
                animi provident quibusdam cumque nisi, minima excepturi velit
                eligendi quo tempore ab debitis nulla, numquam labore nihil.
              </p>
            </div>
          </div>
          <div className="pattern-1 hidden w-1/2 border-4 border-solid border-black shadow-backdrop sm:block"></div>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2 border-4 border-solid border-black bg-white p-4 shadow-backdrop">
            <h1 className="font-abril">hello</h1>
            <p className="font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              asperiores, quia cum aliquid animi provident quibusdam cumque
              nisi, minima excepturi velit eligendi quo tempore ab debitis
              nulla, numquam labore nihil.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis asperiores, quia cum aliquid animi
              provident quibusdam cumque nisi, minima excepturi velit eligendi
              quo tempore ab debitis nulla, numquam labore nihil.
            </p>
          </div>
          <div className="pattern-3 hidden w-1/2 border-4 border-solid border-black bg-white shadow-backdrop sm:block"></div>
          <div className="flex flex-col space-y-2 border-4 border-solid border-black bg-white p-4 shadow-backdrop">
            <h1 className="font-abril">hello</h1>
            <p className="font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              asperiores, quia cum aliquid animi provident quibusdam cumque
              nisi, minima excepturi velit eligendi quo tempore ab debitis
              nulla, numquam labore nihil.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis asperiores, quia cum aliquid animi
              provident quibusdam cumque nisi, minima excepturi velit eligendi
              quo tempore ab debitis nulla, numquam labore nihil.
            </p>
          </div>
        </div>
        <div className="pattern-2 hidden h-56 w-1/2 border-4 border-solid border-black shadow-backdrop sm:block"></div>
      </div>
    </>
  );
}
