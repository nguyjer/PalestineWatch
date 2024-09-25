FROM python

# update Linux package manager
RUN apt-get update

# update Python package manager
RUN pip install --upgrade pip
RUN pip --version

# auto formatter
RUN pip install black

# coverage tool
RUN pip install coverage

# line-ending converter
RUN apt-get -y install dos2unix

# type annotator
RUN pip install mypy

# static analyzer
RUN pip install pylint

# editor
RUN apt-get -y install vim

# Boost library, required by checktestdata
RUN apt-get -y install libboost-dev

# GNU Bignum library, required by checktestdata
RUN apt-get -y install libgmp-dev

# build checktestdata, an input verifier
RUN git clone https://github.com/DOMjudge/checktestdata checktestdata && \
    cd checktestdata                                                  && \
    git checkout release                                              && \
    ./bootstrap                                                       && \
    make                                                              && \
    cp checktestdata /usr/bin                                         && \
    cd -

CMD bash
