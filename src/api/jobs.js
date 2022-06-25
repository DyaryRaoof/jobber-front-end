import backend from './backend';

export const postJob = async (job) => {
  try {
    const response = await backend.post('jobs', { job: job });
    return response;
  } catch (err) {
    return err.response;
  }
};
