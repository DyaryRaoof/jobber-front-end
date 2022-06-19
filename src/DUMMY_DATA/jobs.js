const DUYMMY_JOBS = [];

for (let i = 0; i < 20; i++) {
  DUYMMY_JOBS.push({
    id: i,
    title: 'I want to create a pizza delivery app',
    description: 'I want to create a a pizza deliver app  for my ' + 'shop. I wanted created and designed by the ' + 'same person. this is a web app. please call me ' + 'or message me to get the job.',
    duration: '7 days',
    tags: 'web, mobile, ui/ux',
    budget: '$100',
    categoryId: 1,
    user: {
      id: 1,
      name: 'John Doe',
      email: 'dyaryraoof@gmail.com',
      phone: '07701344444',
      facebook: 'https://www.facebook.com/dyary',
    },
    status: 'open',
    createdAt: '2020-01-01',
    updatedAt: '2020-01-01',
  });
}

export default DUYMMY_JOBS;
