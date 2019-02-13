const user = {
  userName: 'info@test.com',
  name: 'Testname',
  surName: 'Testsurname',
  phone: '065566666',
  city: 'Testcity',
  country: 'Germany',
  address: 'Teststreet 12 / 1, GX11AA',
}

const error = ({ email, password }) => {
  const error = {
    email: email !== 'info@test.com' ? 'Wrong Email' : null,
    password: password !== 'cghhhT11j' ? 'Wrong Password' : null,
  };
  return { error }
}

export const singnInFunc = ({ email, password }) => (
  email === 'info@test.com' && password === 'cghhhT11j'
    ? { user }
    : error({ email, password })
)

