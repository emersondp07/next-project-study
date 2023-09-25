import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatter: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultsProps) {
  // const totalPrice = useMemo(() => {}, [results]);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <List
      height={300}
      rowHeight={30}
      width={900}
      overscanRowCount={5}
      rowCount={results.length}
      rowRenderer={rowRenderer}
    />
  );

  // return (
  //   <div>
  //     <h2>{totalPrice}</h2>
  //     {results.map((product) => {
  //       return (
  //
  //       );
  //     })}
  //   </div>
  // );
}

/**
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo / useCallback
 *
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
 */
