import React from 'react';

interface Props {
  color?: string;
  size?: string;
}

const IconGithub = ({ color = 'currentColor', size = '30px' }: Props): JSX.Element => {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      <path d="M 50 15 C 30.681866 15 15 30.68188 15 50 C 15 69.31812 30.681866 85 50 85 C 69.318134 85 85 69.31812 85 50 C 85 30.68188 69.318134 15 50 15 z M 50 17 C 68.237254 17 83 31.762758 83 50 C 83 68.237242 68.237254 83 50 83 C 31.762746 83 17 68.237242 17 50 C 17 31.762758 31.762746 17 50 17 z M 50 21 C 33.989776 21 21 33.989776 21 50 C 21 66.010224 33.989776 79 50 79 C 56.257603 79 62.057391 77.015569 66.796875 73.642578 A 0.50005 0.50005 0 1 0 66.216797 72.828125 C 64.02537 74.387717 61.595952 75.628533 59 76.509766 L 59 67.654297 C 59 65.362555 57.875049 63.332743 56.197266 62 L 56.949219 62 C 64.125169 62 69.955078 56.217233 69.955078 49.039062 C 69.955078 45.680566 68.634131 42.648229 66.541016 40.341797 C 66.917166 38.069441 66.871804 35.037218 65.972656 32.341797 A 0.50005 0.50005 0 0 0 65.498047 32 C 60.908282 32 57.379304 35.29733 56.632812 36 L 44.166016 36 C 43.470527 35.335798 40.090535 32 35.5 32 A 0.50005 0.50005 0 0 0 35.025391 32.341797 C 34.228287 34.734105 33.953379 37.468413 34.160156 39.599609 C 31.643771 41.968046 30.046875 45.309801 30.046875 49.039062 C 30.046875 56.217233 35.876881 61.998047 43.052734 61.998047 L 44.046875 61.998047 C 42.68886 62.982838 41.623099 64.293745 41.212891 65.96875 C 40.286771 65.95965 39.243539 65.92719 38.279297 65.677734 C 37.220658 65.403858 36.304039 64.919165 35.734375 64.064453 C 34.484775 62.190053 33.555191 61.211167 32.710938 60.6875 C 31.866682 60.163833 31.1145 60.150391 30.5 60.150391 C 30.109167 60.150391 29.748902 60.250351 29.474609 60.476562 C 29.200317 60.702776 29.046002 61.048332 29.027344 61.392578 C 28.990024 62.081071 29.368159 62.786127 30.046875 63.464844 C 31.276875 64.694844 31.182109 64.565391 32.412109 67.025391 C 33.489153 69.181137 36.234373 70.834325 41 70.955078 L 41 76.513672 C 29.950742 72.766267 22 62.319434 22 50 C 22 34.530224 34.530224 22 50 22 C 65.469776 22 78 34.530224 78 50 C 78 52.885591 77.564291 55.669322 76.753906 58.287109 A 0.50005 0.50005 0 1 0 77.708984 58.582031 C 78.5486 55.869818 79 52.986409 79 50 C 79 33.989776 66.010224 21 50 21 z M 35.886719 33.068359 C 39.907048 33.268403 43.032917 36.284719 43.652344 36.865234 A 0.50005 0.50005 0 0 0 43.994141 37 L 56.796875 37 A 0.50005 0.50005 0 0 0 57.138672 36.863281 C 57.71237 36.323732 61.066829 33.276043 65.099609 33.070312 C 65.832243 35.542279 65.90584 38.369116 65.544922 40.376953 A 0.50005 0.50005 0 0 0 65.673828 40.808594 C 67.704625 42.959471 68.955078 45.849047 68.955078 49.039062 C 68.955078 55.676893 63.589269 61 56.949219 61 L 54.5 61 A 0.50005 0.50005 0 0 0 54.291016 61.955078 C 56.436878 62.938714 58 65.142453 58 67.654297 L 58 76.822266 C 55.463784 77.577774 52.783033 78 50 78 C 47.218912 78 44.535356 77.590149 42 76.835938 L 42 70.5 A 0.50005 0.50005 0 0 0 41.5 70 C 36.611467 70 34.2132 68.39393 33.306641 66.578125 C 32.076641 64.118125 31.983906 63.987813 30.753906 62.757812 C 30.202623 62.20653 30.01466 61.681273 30.027344 61.447266 C 30.033644 61.330262 30.059378 61.290897 30.111328 61.248047 C 30.163288 61.205197 30.275833 61.150391 30.5 61.150391 C 31.1145 61.150391 31.540598 61.138281 32.183594 61.537109 C 32.82659 61.935942 33.691944 62.803541 34.902344 64.619141 C 35.64968 65.740428 36.824732 66.333408 38.027344 66.644531 C 39.229955 66.955655 40.484833 66.998047 41.5 66.998047 A 0.50005 0.50005 0 0 0 41.994141 66.580078 C 42.328173 64.526464 43.842569 62.807595 45.708984 61.953125 A 0.50005 0.50005 0 0 0 45.5 60.998047 L 43.052734 60.998047 C 36.412588 60.998047 31.046875 55.676894 31.046875 49.039062 C 31.046875 45.513478 32.571391 42.361995 34.990234 40.166016 A 0.50005 0.50005 0 0 0 35.150391 39.736328 C 34.933645 37.881846 35.208061 35.307415 35.886719 33.068359 z M 36.171875 41.974609 A 0.50005 0.50005 0 0 0 35.832031 42.132812 C 34.939977 43.05849 34.246587 44.123814 33.775391 45.28125 A 0.50005 0.50005 0 1 0 34.701172 45.658203 C 35.123975 44.619639 35.746789 43.662495 36.552734 42.826172 A 0.50005 0.50005 0 0 0 36.171875 41.974609 z M 33.634766 47.021484 A 0.50005 0.50005 0 0 0 33.169922 47.449219 C 33.087872 47.969906 33.046875 48.501021 33.046875 49.039062 C 33.046875 49.567907 33.087865 50.089628 33.167969 50.597656 A 0.50005 0.50005 0 1 0 34.154297 50.441406 C 34.082397 49.985435 34.046875 49.516219 34.046875 49.039062 C 34.046875 48.553105 34.084255 48.074781 34.158203 47.605469 A 0.50005 0.50005 0 0 0 33.634766 47.021484 z M 34.195312 51.980469 A 0.50005 0.50005 0 0 0 33.726562 52.669922 C 34.985945 55.8963 37.872171 58.311364 41.373047 58.90625 A 0.50005 0.50005 0 1 0 41.539062 57.921875 C 38.389939 57.386761 35.79082 55.208262 34.658203 52.306641 A 0.50005 0.50005 0 0 0 34.195312 51.980469 z M 76.509766 59.935547 A 0.50005 0.50005 0 0 0 76.0625 60.257812 C 75.074305 62.767592 73.732636 65.099497 72.099609 67.195312 A 0.50028355 0.50028355 0 1 0 72.888672 67.810547 C 74.579645 65.640363 75.968382 63.225221 76.992188 60.625 A 0.50005 0.50005 0 0 0 76.509766 59.935547 z M 70.763672 68.988281 A 0.50005 0.50005 0 0 0 70.425781 69.152344 C 69.754741 69.867597 69.045712 70.546718 68.302734 71.189453 A 0.50005 0.50005 0 1 0 68.957031 71.945312 C 69.726054 71.280047 70.459338 70.576684 71.154297 69.835938 A 0.50005 0.50005 0 0 0 70.814453 68.988281 A 0.50005 0.50005 0 0 0 70.763672 68.988281 z" />
    </svg>
  );
};

export default IconGithub;
