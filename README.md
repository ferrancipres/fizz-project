# To do EXTRA 
- problema MODAL***
- Pendiente REVISAR CSS + NAVEGACION WEB 
- Logo  ***
- Video (CAM) / Modificar HOME ***
- Dropdown para el boton user (React & Tailwind)
-  Acordion - TailwindCSS
- Wish Cart 
- Quizás intentaría que el html fuese más semántico en algunas partes porque google lo penaliza mucho 
- He visto algún que otro useEffect con su array de dependencias vacío, Siempre rellenarlo con algún estado
- db.json (personal)
- Checkout ( No sé como desactivar el botón)

# To do EXTRA - VALENZUELA (tutoria)
- Tengo 2 errores en el header (login, logout)

# React + TypeScript + Vite = fizz-proejct
- Disponibilidad -MIERCOLES (8 a 12) & JUEVES **

## To DO
- btn 'login' 'logout'
- Create account
- Iniciar sesion 
- Checkout..page..+ Shipping Form + Select payment..+ Final page..to return HOME
- Welcome back, username - Logout


export function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Header />
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}

::.....
const {register, handleSubmit} = useForm();
const [data, setData] = useState('');
const onSubmit = {handleSubmit((data) => 
setData (JSON.stringify(data)))}>

<label>First Name:
<input name='firstName' type='text' placeholder=''>
</label>
<input {...register('firstName')} placeholder='First name' />