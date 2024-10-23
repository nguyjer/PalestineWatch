"""updated news column with source

Revision ID: e81008b5910b
Revises: cc67874cd06d
Create Date: 2024-10-22 23:24:03.856713

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e81008b5910b'
down_revision = 'cc67874cd06d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('news', schema=None) as batch_op:
        batch_op.add_column(sa.Column('source', sa.String(length=500), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('news', schema=None) as batch_op:
        batch_op.drop_column('source')

    # ### end Alembic commands ###