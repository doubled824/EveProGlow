/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

import styled from 'styled-components';

// This extracts your styles from the HTML, making it easier to reuse
const Container = styled.div`
  text-align: center;
  padding: 6.25rem;
  background: #000;
  color: #fff;
  min-height: 100vh;
  font-family: sans-serif;
`;

export default function Home() {
  return (
    <Container>
      <h1>Eve Pro Glow</h1>
      <h2>Science-backed mobile skincare</h2>
      <p>Custom Korean oxygen infusion</p>
      <p>Data-driven personalization</p>
      <p>No contracts • Recurring luxury</p>
    </Container>
  );
}

