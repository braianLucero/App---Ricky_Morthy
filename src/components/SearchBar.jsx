
export default function SearchBar({onSearch}) {
   return (
      <div>
            <input type='search' />
            <button onClick={() => onSearch('no existe el ID   ')}>Agregar</button>
      </div>
   );
}
