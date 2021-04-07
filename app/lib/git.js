const axios = require('axios');

const URL = 'https://api.github.com/users/';

const getUserUrl = (username) => (`${URL}${username}`);
const getReposUrl = (username) => (`${URL}${username}/repos`);
const repoStars = (total, repo) => (total + repo.stargazers_count);
const repoWatchers = (total, repo) => (total + repo.watchers);
const repoForks = (total, repo) => (total + repo.forks);

const userStats = (user) => {
  const { followers, following, public_repos } = user;
  return { followers, following, repositories: public_repos };
};

const reposStats = (repos) => {
  const stars = repos.reduce(repoStars, 0);
  const watchers = repos.reduce(repoWatchers, 0);
  const forks = repos.reduce(repoForks, 0);
  return { stars, watchers, forks };
};

const getUser = async (username) => {
  const url = getUserUrl(username);
  const user = await axios.get(url);
  return user.data;
};

const getRepos = async (username) => {
  const url = getReposUrl(username);
  const repos = await axios.get(url);
  return repos.data;
};

const getUserStats = async (username) => {
  const user = await getUser(username);
  const repos = await getRepos(username);
  const uStats = userStats(user);
  const rStats = reposStats(repos);
  const stats = { ...uStats, ...rStats };
  return stats;
};

module.exports = getUserStats;
