export interface NewContributorsDetailProps {
  title: string;
  data: { [key: string]: string[] };
}

export const NewContributorsDetail = ({
  title,
  data
}: NewContributorsDetailProps) => {
  return (
    <>
      <h4 style={{ textAlign: 'center', color: '#464646', fontWeight: 700 }}>
        {title}
      </h4>
      <ol style={{ listStyle: 'none' }}>
        {Object.entries(data).map(([key, contributors]) => (
          <li key={key}>
            <h5 style={{ margin: '0' }}>{key}</h5>
            <ol style={{ listStyle: 'none', padding: '0' }}>
              {contributors.map((contributor, index, arr) => (
                <li key={contributor} style={{ display: 'inline' }}>
                  <a href={`https://github.com/${contributor}`} target="_blank">
                    {contributor}
                  </a>
                  {index < arr.length - 1 && '、'}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};
