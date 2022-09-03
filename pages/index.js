import { useForm } from 'react-hook-form';

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='container max-w-3xl mx-auto'>
      <div>
        <form className='py-8' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name' className='font-bold text-gray-700'>
              Notification Name
            </label>
            <input
              placeholder='Notification Name'
              className='w-full border border-gray-300 px-4 py-2'
              {...register('name', { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='mt-4'>
            <label htmlFor='message' className='font-bold text-gray-700'>
              Notification Message
            </label>
            <input
              placeholder='Notification Message'
              className='w-full border border-gray-300 px-4 py-2'
              {...register('message', { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <div className='mt-4'>
            <label htmlFor='message' className='font-bold text-gray-700'>
              Call To Action Text
            </label>
            <input
              placeholder='Call To Action Text'
              className='w-full border border-gray-300 px-4 py-2'
              {...register('cta', { required: true })}
            />
            {errors.cta && <span>This field is required</span>}
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 transition-all'
          >
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
