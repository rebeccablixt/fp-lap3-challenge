import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import axios from 'axios';
jest.mock('axios')
axios.get.mockResolvedValue([{
    allow_forking: true,
    archive_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/{archive_format}{/ref}",
    archived: false,
    assignees_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/assignees{/user}",
    blobs_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/git/blobs{/sha}",
    branches_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/branches{/branch}",
    clone_url: "https://github.com/Aaron-Marsh/auguste-WUD04-newProject.git",
    collaborators_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/collaborators{/collaborator}",
    comments_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/comments{/number}",
    commits_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/commits{/sha}",
    compare_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/compare/{base}...{head}",
    contents_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/contents/{+path}",
    contributors_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/contributors",
    created_at: "2022-04-28T13:48:18Z",
    default_branch: "main",
    deployments_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/deployments",
    description: "Deep sea coral site",
    disabled: false,
    downloads_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/downloads",
    events_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/events",
    fork: true,
    forks: 0,
    forks_count: 0,
    forks_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/forks",
    full_name: "Aaron-Marsh/auguste-WUD04-newProject",
    git_commits_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/git/commits{/sha}",
    git_refs_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/git/refs{/sha}",
    git_tags_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/git/tags{/sha}",
    git_url: "git://github.com/Aaron-Marsh/auguste-WUD04-newProject.git",
    has_downloads: true,
    has_issues: false,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: null,
    hooks_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/hooks",
    html_url: "https://github.com/Aaron-Marsh/auguste-WUD04-newProject",
    id: 486613002,
    is_template: false,
    issue_comment_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/issues/comments{/number}",
    issue_events_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/issues/events{/number}",
    issues_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/issues{/number}",
    keys_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/keys{/key_id}",
    labels_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/labels{/name}",
    language: null,
    languages_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/languages",
    license: null,
    merges_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/merges",
    milestones_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/milestones{/number}",
    mirror_url: null,
    name: "auguste-WUD04-newProject",
    node_id: "R_kgDOHQEgCg",
    notifications_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/notifications{?since,all,participating}",
    open_issues: 0,
    open_issues_count: 0,
    owner: {login: 'Aaron-Marsh', id: 101359282, node_id: 'U_kgDOBgqesg', avatar_url: 'https://avatars.githubusercontent.com/u/101359282?v=4', gravatar_id: ''},
    private: false,
    pulls_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/pulls{/number}",
    pushed_at: "2022-04-28T14:15:33Z",
    releases_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/releases{/id}",
    size: 0,
    ssh_url: "git@github.com:Aaron-Marsh/auguste-WUD04-newProject.git",
    stargazers_count: 0,
    stargazers_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/stargazers",
    statuses_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/statuses/{sha}",
    subscribers_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/subscribers",
    subscription_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/subscription",
    svn_url: "https://github.com/Aaron-Marsh/auguste-WUD04-newProject",
    tags_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/tags",
    teams_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/teams",
    topics: [],
    trees_url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject/git/trees{/sha}",
    updated_at: "2022-04-28T09:38:32Z",
    url: "https://api.github.com/repos/Aaron-Marsh/auguste-WUD04-newProject",
    visibility: "public",
    watchers: 0,
    watchers_count: 0
}])

global.React = React;
global.render = render;
global.userEvent = userEvent;
