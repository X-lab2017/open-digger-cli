export interface ActivityDetailProps {
  title: string;
  data: { [key: string]: [string, number][] };
}

export const ActivityDetail = ({ title, data }: ActivityDetailProps) => {
  return (
    <>
      <h4 style={{ textAlign: 'center', color: '#464646', fontWeight: 700 }}>
        {title}
      </h4>
      <ol style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(data).map(([key, contributors]) => (
          <li key={key}>
            <h5 style={{ margin: '0' }}>
              {key}（{contributors.length}）
            </h5>
            <ol style={{ listStyle: 'none', padding: '0' }}>
              {contributors.map(([contributor, busFactor], index, arr) => (
                <li key={contributor} style={{ display: 'inline' }}>
                  <a href={`https://github.com/${contributor}`} target="_blank">
                    {contributor}
                  </a>
                  <span
                    style={{
                      margin: '0 0 0 0.5rem',
                      padding: '0 0.7rem',
                      backgroundColor: '#5870e7',
                      color: 'white',
                      borderRadius: '50rem'
                    }}
                  >
                    {busFactor}
                  </span>
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
